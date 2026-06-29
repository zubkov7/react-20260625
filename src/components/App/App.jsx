// export const App = ({ style, text }) => {
//   //   const { style } = props;

//   //   return <div style={props.style}>hello world!</div>;
//   return (
//     <div style={style}>
//       hello world!
//       <div>{text}</div>
//     </div>
//   );
// };

export const App = ({ style, children }) => {
  // logic

  return (
    <div style={style}>
      {children}
      <ul>
        <li>1</li>
      </ul>
    </div>
  );
};
