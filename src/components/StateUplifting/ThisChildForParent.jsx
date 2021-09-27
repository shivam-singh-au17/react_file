import React from 'react'

export default function ThisChildForParent(props) {
    return (
      <>
        <h1>Here Is My Counter</h1>
        <h2>
          Count is: <span>{props.count}</span>
        </h2>
      </>
    );
}
