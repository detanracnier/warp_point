import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Starchart(props) {
    const shippingRoute = props.route;
    const starchart = props.chart;
    const [mapScale, setMapScale] = useState(150);
    const [viewBox, setViewBox] = useState({
        xOffset: 200,
        yOffset: 70,
        width: 400,
        height: 250
    });

    function renderPlanets() {
        return (
            starchart.map((planet) => {
                return <circle name={planet.name} key={planet.name} cx={planet.xCord} cy={planet.yCord} r="5" fill="white" />;
            })
        )
    }

    function renderRoutes() {
        let complete = [];
        return (
            starchart.map((planet) => {
                return planet.connections.filter(x => !complete[x]).map((connection) => {
                    let planetB = starchart.find(p => p.name === connection.name);
                    let style = {
                        stroke: "#cfe3cf",
                        strokeWidth: 1.5
                    }
                    return (
                        <line key={uuidv4()} style={style}
                            x1={planet.xCord}
                            y1={planet.yCord}
                            x2={planetB.xCord}
                            y2={planetB.yCord}
                        />
                    );
                });
            })
        )
    }

    function renderPlanetNames() {
        let style = {
            fontSize: "0.6em",
            fill: "#a1c5ff",
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
            khtmlUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            UserSelect: "none"
        }
        return (
            starchart.map((planet) => {
                return <text style={style} key={planet.name} x={planet.xCord} y={planet.yCord - 5}>{planet.name}</text>;
            })
        )
    }

    function renderPlanetNames2() {
        let style = {
            fontSize: "0.6em",
            fill: "#000000",
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
            khtmlUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            UserSelect: "none"
        }
        return (
            starchart.map((planet) => {
                return <text style={style} key={planet.name} x={planet.xCord+0.8} y={planet.yCord - 5.8}>{planet.name}</text>;
            })
        )
    }

    function renderRoute(){
        if(shippingRoute){
            return (
                shippingRoute.map((planet, index)=> {
                    if(shippingRoute.length > index + 1){
                        let style = {
                            stroke: "#008a09",
                            strokeWidth: 4
                        }
                        return (
                            <line
                                key={uuidv4()}
                                style={style}
                                x1={planet.xCord}
                                y1={planet.yCord}
                                x2={shippingRoute[index+1].xCord}
                                y2={shippingRoute[index+1].yCord}
                            />
                        );
                    }
                    return <div key={uuidv4()} ></div>;
                })
            )
        }
    }

    function handleMouseDown(e) {
        let startingX = e.pageX;
        let startingY = e.pageY;
        let currentXOffset = viewBox.xOffset;
        let currentYOffset = viewBox.yOffset;
        function onMouseMove(e) {
            let newXOffset = currentXOffset + (startingX - e.pageX)
            let newYOffset = currentYOffset + (startingY - e.pageY)
            if (newXOffset < 100) {
                newXOffset = 100;
            }
            if (newYOffset < 0) {
                newYOffset = 0;
            }
            if (newXOffset > 500) {
                newXOffset = 500;
            }
            if (newYOffset > 250) {
                newYOffset = 250;
            }
            setViewBox({
                ...viewBox,
                xOffset: newXOffset,
                yOffset: newYOffset
            })
        }

        function handleMouseUp(e) {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', onMouseMove);
    }

    function handleScale(e) {
        let scaleOffset = e;
        let newScale = mapScale + (scaleOffset / 10);
        if (newScale > 200) {
            newScale = 200;
        } else if (newScale < 50) {
            newScale = 50;
        }
        setMapScale(newScale);
    }

    function viewBoxString() {
        let string = viewBox.xOffset + "," + viewBox.yOffset + "," + viewBox.width * (mapScale / 100) + "," + viewBox.height * (mapScale / 100);
        return string;
    }

    return (
        <div>
            <svg
                onMouseDown={(e) => handleMouseDown(e)}
                onDragStart={() => { return false }}
                viewBox={viewBoxString()}
                id="svg_canvas"
                className="svg border"
                width="100%"
                height="450"
                style={{backgroundImage: 'url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80")'}}
            >
                {renderRoutes()}
                {renderPlanets()}
                {renderRoute()}
                {renderPlanetNames2()}
                {renderPlanetNames()}
            </svg>
            <div className="btn btn-info" style={{ position: "relative", top: "-50px", left: "10px" }} onClick={() => handleScale(-100)}>+</div>
            <div className="btn btn-info" style={{ position: "relative", top: "-50px", left: "20px", width: "35px" }} onClick={() => handleScale(100)}>-</div>
        </div>
    )
}