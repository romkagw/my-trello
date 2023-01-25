import React from 'react';


export default function Card(props: {title:string}) {
  return (
    <>
    <h2 className="card-title">{props.title}!</h2>
    </>
  );
}
