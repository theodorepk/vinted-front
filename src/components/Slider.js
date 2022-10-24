import { Range, getTrackBackground } from "react-range";
import { useState } from "react";

const Slider = ({ priceMax, priceMin, setPriceMax, setPriceMin, data }) => {
  const STEP = 1;
  const MIN = data.min;
  const MAX = data.max;

  const [values, setValues] = useState([priceMin || MIN, priceMax || MAX]);

  return (
    <Range
      values={values}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={(values) => {
        console.log(values);
        setValues(values);
        // setPriceMin(values[0]);
        // setPriceMax(values[1]);
      }}
      onFinalChange={(values) => {
        setPriceMin(values[0]);
        setPriceMax(values[1]);
      }}
      renderTrack={({ props, children }) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "300px",
              borderRadius: "4px",
              background: getTrackBackground({
                values,
                colors: ["#ccc", "#0dafba", "#ccc"],
                min: MIN,
                max: MAX,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ index, props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #AAA",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-28px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "14px",
              fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
              padding: "4px",
              borderRadius: "4px",
              backgroundColor: "#0dafba",
            }}
          >
            {values[index].toFixed(1)}
          </div>
        </div>
      )}
    />
  );
};

export default Slider;
