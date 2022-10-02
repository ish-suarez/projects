   // Fullstack Info
    const fullStackInfo = {
    frontend: {
    frontName: "Frontend",
    frontIcon:
        "https://img.icons8.com/dotty/65/000000/application-window.png",
    frontLanguages: [
        "HTML",
        "Javascript",
        "React.js",
        "Python",
        "Git",
        `API's`,
        "Axios",
        'NextJs',
        "Tailwind",
        "CSS"
    ],
    frontInfo: `
    
            Front-end developments is used for showing off your services and information about what your business, 
            admin dashboards.`,
    },
    backend: {
    backName: "Backend",
    backIcon:
        "https://img.icons8.com/external-tal-revivo-solid-tal-revivo/65/000000/external-mining-process-cryptocurrency-on-a-backend-server-database-solid-tal-revivo.png",
    backLanguages: [
        "node.js",
        "express",
        "Mongodb",
        "postgresql",
        "mysql",
        "nginx",
        'NextJs'
    ],
    backInfo: `Backend development is code that runs in the background. It is what makes the machine tick.

                Your database connection happens here along with other critical functionalities for your website or business.`,
    },
};



const FullStackLanguages = ({language}) => (
    <div className=" backdrop-blur bg-zinc-50/20 transition duration-200 cursor-default shadow-md py-1 px-2 rounded-md mx-1 mb-3 
                    hover:scale-105 hover:bg-zinc-50/40 ">
        <p className="text-zinc-100 hover:text-zinc-600">{language}</p>
    </div>
)

const FullStackCard = ({icon, languages, info, name}) => {

    return (
        <div className="md:w-1/2 md:px-2 flex flex-col flex-wrap justify-center items-center px-3
                        md:justify-start">
            <div className="flex justify-center items-center mb-5 font-fullstack text-zinc-50">
                <img src={icon} loading="lazy" alt="Dev Icon" />
                <h4 className="text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-bold my-4 text-blueGray-600">
                    {name}
                </h4>
            </div>
            <div className="flex flex-wrap justify-center items-center mb-3 max-w-md">
                {languages.map((language, i) => (
                    <FullStackLanguages key={i} language={language} />
                ))}
            </div>
            <p className="leading-7 px-10 font-aton text-zinc-100 2xl:text-lg sm:text-md md:text-lg 2xl:w-3/4 text-blueGray-600 text-center ">
                {info}
            </p>
        </div>
    )
    
}


export default function() {
    const { frontName, frontLanguages, frontIcon, frontInfo } =
    fullStackInfo.frontend;
    
    const { backName, backLanguages, backIcon, backInfo } = 
    fullStackInfo.backend;
    
    return (
        <div className=" relative flex flex-col md:flex-row items-center justify-center space-y-20 h-full">
            <h2 className="absolute top-5 text-zinc-200 text-4xl font-fullstack">My skills</h2>
            <div className="flex flex-col
                            md:flex-row">
                {/* FrontEnd info container */}
                <FullStackCard
                name={frontName}
                languages={frontLanguages}
                icon={frontIcon}
                info={frontInfo}
                />
                
                {/* Backend info container */}
                <FullStackCard
                name={backName}
                languages={backLanguages}
                icon={backIcon}
                info={backInfo}
                />

            </div>
        </div>
    )
}