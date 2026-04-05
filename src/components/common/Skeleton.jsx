export const Skeleton = ({ className }) => {
    return (
        <div className={`animate-pulse rounded-md bg-secondary/70 ${className}`} />
    );
};

export const DashboardSkeleton = () => {
    return (
        <div className="h-full flex flex-col gap-8 pb-16">
            <header>
                <Skeleton className="h-10 w-48 mb-2" />
                <Skeleton className="h-5 w-64" />
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Skeleton className="h-[130px] rounded-2xl w-full" />
                <Skeleton className="h-[130px] rounded-2xl w-full" />
                <Skeleton className="h-[130px] rounded-2xl w-full" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
                <Skeleton className="min-h-[400px] h-full lg:col-span-2 rounded-2xl" />
                <Skeleton className="min-h-[400px] h-full lg:col-span-1 rounded-2xl" />
            </div>
        </div>
    );
}

export const TransactionsSkeleton = () => {
    return (
        <div className="h-full flex flex-col gap-6 pb-16">
            <header className="flex justify-between items-center">
                <div>
                    <Skeleton className="h-10 w-48 mb-2" />
                    <Skeleton className="h-5 w-64" />
                </div>
                <Skeleton className="h-10 w-32 hidden md:block" />
            </header>
            <div className="flex gap-4 flex-col sm:flex-row">
                <Skeleton className="h-11 flex-1 rounded-lg" />
                <Skeleton className="h-11 w-[120px] rounded-lg" />
            </div>
            <Skeleton className="flex-1 min-h-[300px] rounded-xl w-full mt-4" />
        </div>
    );
}
