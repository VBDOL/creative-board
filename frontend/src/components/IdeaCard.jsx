const IdeaCard = ({ idea, onRemove }) => {
  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <p>{idea.text}</p>
      <button
        className="text-red-600 hover:text-red-800"
        onClick={onRemove}
        aria-label="Remover ideia"
      >
        ×
      </button>
    </div>
  )
}

export default IdeaCard
