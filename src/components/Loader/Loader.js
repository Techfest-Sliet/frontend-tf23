import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div class={styles.center}>
      <div class={styles.loader}>
        <svg id="triangle" width="70px" height="70px" viewbox="-3 -4 39 39">
          <polygon
            fill="currentcolor"
            stroke="rgb(30, 255, 0)"
            stroke-width="2"
            points="16,0 32,32 0,32"
          ></polygon>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
