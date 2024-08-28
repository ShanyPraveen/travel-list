export function Stats({ numberOfItems, numberOfItemsPacked }) {
  const percentage = ((numberOfItemsPacked / numberOfItems) * 100) || 0;

  return (
    <footer className="stats">
      <em> {percentage === 100 ? "You got everything, Ready to go! ✈️" : `You have ${numberOfItems} elements on your list, and you already packed ${numberOfItemsPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
