import React from "react";

export default function Starchart(props) {
    const starchart = props.chart;

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
                        stroke:"#008a09",
                        strokeWidth: 2
                    }
                    return (
                        <line key={planet.xCord+planet.yCord+planetB.xCord+planetB.yCord} style={style}
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

    return (
        <svg viewBox="100 0 700 500" id="svg_canvas" className="svg border bg-dark" width="700" height="500" >
            {renderRoutes()}
            {renderPlanets()}
        </svg>
    )
}