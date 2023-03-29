import React from "react";

// Function Declaration
function Component1(props) {
  return (
    // React fragment
    <>
      <h1> Hello {props.name} </h1>
    </>
  );
}

// Function Expression
const Component2 = function (props) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "tan",
        color: "gray",
      }}
    >
      <h1>Function Expression</h1>
    </div>
  );
};

// Arrow Function
const Component3 = (props) => {
  const list = [
    <h1>Hello World</h1>,
    <h1>Hello World</h1>,
    <h1>Hello World</h1>,
  ];
  return <ul>{list}</ul>;
};

const Component4 = (props) => {
  const names = [
    "Ramya",
    "Yana",
    "Stanley",
    "Gino",
    "Lauren",
    "Jacqueline",
    "Luis",
  ];
  //   const map = names.map((name) => {
  //     return (
  //       <div>
  //         <h1>{name}</h1>
  //       </div>
  //     );
  //   });
  //
  //   return <>{map}</>;

  return (
    <>
      {names.map((name) => {
        return (
          <div>
            <h1>{name}</h1>
          </div>
        );
      })}
    </>
  );
};

// Showing them in use
export default function App(props) {
  return (
    <div className="App">
      <Component1 name="Michael" />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

// import React from "react";

// // Function Declarion
// function Component1(props) {
//   return (
//     //  React Fragment
//     <>
//       <h1>Hello {props.name} </h1>
//     </>
//   );
// }
// // Function Expression
// const Component2 = function (props) {
//   return (
//     // Inline styling
//     <div
//       style={{
//         width: “200px”,
//         height: “200px”,
//         backgroundColor: “tan”,
//         color: “grey”
//       }}
//     >
//       <h1>Function Expression</h1>
//     </div>
//   );
// };
// // Arrow Function
// const Component3 = (props) => {
//   const list = [
//     <h1>Hello World</h1>,
//     <h1>Hello World</h1>,
//     <h1>Hello World</h1>
//   ];
//   return <ul>{list}</ul>;
// };
// const Component4 = (props) => {
//   const names = [
//     “Ramya”,
//     “Yana”,
//     “Stanley”,
//     “Gino”,
//     “Lauren”,
//     “Jacqueline”,
//     “Luis”
//   ];
//   // const map = names.map((name) => {
//   //   return (
//   //     <div>
//   //       <h1>{name}</h1>
//   //     </div>
//   //   );
//   // });
//   return (
//     <>
//       {
//         names.map((name) => {
//           return (
//             <div>
//               <h1>{name}</h1>
//             </div>
//           )
//         })
//       }
//     </>
//   );
// };
// export default function App(props) {
//   return (
//     <div className=“App”>
//       <Component1 name=“Michael” />
//       <Component2 />
//       <Component3 />
//       <Component4 />
//     </div>
//   );}
