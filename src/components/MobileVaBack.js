export default function MobileVaBack() {
    return (
        <div className="md:hidden fixed bottom-0 inset-x-0">
            <footer className="bg-white border-t border-gray-200 p-4">
                <div className="flex space-x-4">
                    <button
                        type="button"
                        className="flex items-center justify-center text-base font-semibold h-10 rounded px-4 border transition outline-none !text-white bg-green-400 border-green-400 hover:brightness-110 hover:!bg-green-400 focus:brightness-110 focus:ring-2 ring-secondary flex-1"
                    >
                        Back
                    </button>
                </div>
            </footer>
        </div>
    );
}
