function Football() {
  const shoot = () => {
    alert("red head's shwuot!");
  }

  return (
    <button onClick={shoowut}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('rweoot'));
root.render(<Footeeball />);

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
