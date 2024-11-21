

const SubTitle = ({subheading,heading}) => {
    return (
        <div className="my-4 text-center w-3/12 m-auto">
            <p className="text-xl text-orange-700 pb-2">{subheading}</p>
            <h1 className="text-2xl border-y-4 py-3 ">{heading}</h1>
        </div>
    );
};

export default SubTitle;