import { Range, getTrackBackground } from "react-range";
import { useState } from "react";
import { useVintedStore } from "../logic/store";

const Slider = () => {
  const min = useVintedStore((state) => state.min);
  const max = useVintedStore((state) => state.max);
  const setPriceMin = useVintedStore((state) => state.setPriceMin);
  const setPriceMax = useVintedStore((state) => state.setPriceMax);
  const priceMin = useVintedStore((state) => state.priceMin);
  const priceMax = useVintedStore((state) => state.priceMax);

  const STEP = 1;
  const MIN = min;
  const MAX = max;

  console.log("MAX", MAX);
  console.log("MIN", MIN);

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
      }}
      onFinalChange={(values) => {
        setPriceMin(values[0]);
        setPriceMax(values[1]);
      }}
      renderTrack={({ props, children }) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className="slider"
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
              top: "-22px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "14px",
              fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
              padding: "2px",
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
