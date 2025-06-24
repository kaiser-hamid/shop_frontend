export default function NoContent({ message = "No Content" }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-20">
            <h1 className="text-zinc-400 text-sm">{message}</h1>
        </div>
    )
}