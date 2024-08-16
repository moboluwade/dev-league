const ConfirmDelete = ({ resourceName, onConfirm, disabled, onCloseModal }) => {
  return (
    <div className="max-w-[40rem] flex flex-col gap-3">
      <h3>Delete {resourceName}</h3>
      <p className="text-gray-500 mb-3">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-3">
        <button
          className="text-base px-6 py-3 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-800  "
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          className="text-base px-6 py-3  rounded-md font-medium text-red-100 bg-red-700 hover:bg-red-800 focus:bg-red-900"
          disabled={disabled}
          onClick={onConfirm}
        >
          {disabled ? "Deleting" : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
