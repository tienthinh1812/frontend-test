function GroupContent(props) {
  return (
    <div className="group-content">
      <h2>Lorem ipsum dolor sit amet</h2>
      <img src={props.image} alt="" />
      <p>{props.lorem}</p>
    </div>
  );
}

export default GroupContent;
