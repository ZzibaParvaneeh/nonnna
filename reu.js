function Football() {
  const shoot = () => {
    alert("red hed's hoot!");
  }

  return (
    <button onClick={shot}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElemenById('eoo'));
root.render(<Footeebaleel />);

            function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal22!")}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);
