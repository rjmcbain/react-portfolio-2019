import React from "react";

export default function Footer(props) {
  return (
    <div>
      <footer id="main-footer">Copyright &copy; {props.year}</footer>
    </div>
  );
}
