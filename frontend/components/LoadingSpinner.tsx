interface LoadingSpinnerPropsI {
    title?: string;
}

const LoadingSpinner = ({ title = "" }: LoadingSpinnerPropsI) => (
    <div className="flex flex-col items-center justify-center py-10 text-gray-600 space-y-3">
        <div className="w-6 h-6 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        {title && <p className="text-sm">{title}</p>}
    </div>
);


export default LoadingSpinner;