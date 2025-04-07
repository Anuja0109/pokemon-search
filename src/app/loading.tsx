export default function Loading() {
  return <div className="w-full h-full fixed top-0 left-0 bg-gray-300 opacity-75 z-50">
    <div className="flex justify-center items-center mt-[50vh]">
      <div className="fas fa-circle-notch fa-spin fa-5x text-(--color-blue-text)"></div>
    </div>
  </div>
}