function Football() {
  const shoot = () => {
    alert("red hed's shwuot!");
  }

  return (
    <button onClick={shoout}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('ret'));
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
