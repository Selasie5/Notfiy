import TagInput from "../../components/input/TagInput"
const AddEditNotes = () => {
  return (
    <div className="flex flex-col gap-2">
        <label className="text-xs text-slate-400">TITLE</label>
        <input
        type="text"
        className="text-2xl text-slate-950 outline-none"
        placeholder="Go To Gym At 5"
        />

        <div className="flex flex-col gap-2 mt-4">
            <label className="text-xs text-slate-400">CONTENT</label>
            <textarea
            type="text"
            className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded-sm"
            placeholder="Content"
            rows={10}/>

            </div>
            <div className="mt-3">
                <label className="text-xs text-slate-400">TAGS</label>
                <TagInput/>
                </div>
                <button className="bg-purple-500 font-medium mt-5 p-3 text-white" onClick={()=>{}}>ADD</button>
    </div>
  )
}

export default AddEditNotes