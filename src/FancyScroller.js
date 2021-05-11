import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 1000;
const mySyles = makeStyles((theme) => ({
  bounds: {
    [theme.breakpoints.up("xs")]: {
      width: "calc(100vw)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "calc(100vw - 36vh)",
    },
    height: "calc(100vh - 36vh)",

    maxHeight: (props) =>
      props.height != null ? props.height + "px" : DEFAULT_HEIGHT + "px",
    maxWidth: (props) =>
      props.width != null ? props.width + "px" : DEFAULT_WIDTH + "px",
    overflow: "hidden",
    position: "relative",
  },
  scrollableContainer: {
    position: "absolute",
    height: "calc(100% + 50px)",
    width: "calc(100% + 50px)",
    paddingRight: "50px",
    maxWidth: (props) => {
      const componentWidth =
        props.width != null ? props.width + "px" : DEFAULT_WIDTH + "px";
      return "calc(" + componentWidth + " + 50px)";
    },
    overflowY: "scroll",
    scrollBehavior: "smooth",
    left: "0",
    top: "0",
    backgroundColor: theme.palette.primary,
  },
  scrollable: {
    height: "100%",
    width: "100%",
    padding: "5%",
    //paddingRight: "calc(5% + 50px)",
  },
}));

//<FancyScroller color="#F2F2F2" threshold={0.1} height={1200} width={1000}>
//xs, sm, lg, xl, figure out logic
function FancyScroller(props) {
  const classes = mySyles(props);
  const scroller = useRef(null);
  const boundsRef = useRef(null);
  const [currentHeight, setCurrentHeight] = useState(null);
  const [currentChildren, setCurrentChildren] = useState(null);
  const [initialChildren, setInitialChildren] = useState(null);

  const threshold = props.threshold != null ? props.threshold : 0.33;

  const spacerDiv = (calculatedHeight, key) => {
    return (
      <div
        key={"3dchildren-" + key}
        style={{ height: `${Math.floor(calculatedHeight / 3)}px` }}
      />
    );
  };

  //One adittional spacer appears when I start to scroll. Why?
  const addSpacesToChildren = (children, calculatedHeight) => {
    const children2d = React.Children.toArray(children).map((c, i) => {
      return [
        spacerDiv(calculatedHeight, i * 2 + 1),
        React.cloneElement(c, { key: "3dchildren-" + (i * 2 + 2) }),
      ];
    });
    return [spacerDiv(calculatedHeight / 2, 0)]
      .concat(...children2d)
      .concat([
        spacerDiv(calculatedHeight * 1.2, children2d.length * 2 + 1),
        spacerDiv(calculatedHeight, children2d.length * 2 + 2),
      ]);
  };

  const handleScroll = (offsetScroll) => {
    const scrollerChildren = Object.values(scroller.current.children);
    const obscurerHeigth = currentHeight * threshold;

    setCurrentChildren(
      getMappedChildren(offsetScroll, scrollerChildren, obscurerHeigth)
    );
  };

  useEffect(() => {
    setCurrentHeight(boundsRef.current.clientHeight);
    console.log(
      addSpacesToChildren(props.children, boundsRef.current.clientHeight)
    );
    setInitialChildren(
      addSpacesToChildren(props.children, boundsRef.current.clientHeight)
    );
    /*
    const transfomedChildren = addSpacesToChildren(
      props.children,
      boundsRef.current.clientHeight
    ).map((ch, i) =>
      addTransformationToChild(
        ch,
        i,
        0,
        Object.values(scroller.current.children),
        boundsRef.current.clientHeight * threshold
      )
    );*/
    setCurrentChildren(
      addSpacesToChildren(props.children, boundsRef.current.clientHeight)
    );
  }, []);

  const getMappedChildren = (
    offsetScroll,
    scrollerChildren,
    obscurerHeigth
  ) => {
    return React.Children.map(initialChildren, (ch, i) =>
      addTransformationToChild(
        ch,
        i,
        offsetScroll,
        scrollerChildren,
        obscurerHeigth
      )
    );
  };

  const addTransformationToChild = (
    ch,
    i,
    offsetScroll,
    scrollerChildren,
    obscurerHeigth
  ) => {
    const offsetBottom =
      scrollerChildren[i].offsetTop + scrollerChildren[i].offsetHeight;
    if (scrollerChildren[i].offsetTop <= offsetScroll + obscurerHeigth) {
      const proportion =
        1 -
        Math.max(
          (scrollerChildren[i].offsetTop - offsetScroll) / obscurerHeigth,
          0
        );
      return (
        <div
          key={"tranformer-" + i}
          style={{
            transformOrigin: "50% 100%",
            transform: `perspective(200px) translateZ(-${
              10 * proportion
            }px) rotateX(${85 * proportion}deg)`,
            transitionDuration: "1ms",
            transitionProperty: "transform",
            opacity: `${1 - proportion}`,
          }}
        >
          {ch}
        </div>
      );
    } else if (offsetBottom >= offsetScroll + currentHeight - obscurerHeigth) {
      const proportion =
        1 -
        Math.max(
          (offsetBottom - offsetScroll - currentHeight + obscurerHeigth) /
            obscurerHeigth,
          0
        );
      return (
        <div
          key={"tranformer-" + i}
          style={{
            transformOrigin: "50% 0%",
            transform: `perspective(200px) rotateX(-${
              85 * (1 - proportion)
            }deg)`,
            transitionDuration: "1ms",
            transitionProperty: "transform",
            opacity: `${proportion}`,
          }}
        >
          {ch}
        </div>
      );
    } else {
      return <div key={"tranformer-" + i}>{ch}</div>;
    }
  };
  /*
  const getChildren = (children) => {
    return React.Children.map(children, (c) => React.cloneElement(c));
  };*/

  return (
    <div className={classes.bounds} ref={boundsRef}>
      <div
        className={classes.scrollableContainer}
        onScroll={(e) => handleScroll(e.target.scrollTop)}
      >
        <div className={classes.scrollable} ref={scroller}>
          {currentChildren}
        </div>
      </div>
    </div>
  );
}

export default FancyScroller;
