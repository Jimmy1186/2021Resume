import React from 'react'
import styled from "styled-components"

const Span = styled.span`
  font-size: 1.2em;
  color:${(prop)=>prop.fontColor}
`;

function ThemeBtm({themeToggler}) {
    return (
        <div className="container">
       <Span fontColor="#ffc23a">☀︎</Span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onClick={() => themeToggler()} />
            <span className="slider round"> </span>
          </label>
        </div>
        <Span fontColor="#c96dfd">☽</Span>
      </div>
    )
}

export default ThemeBtm
