
const cases = [
    { 
        source: 'https://github.com/ish-suarez/KTC',
        name: `Kristina's Tennis Camp`,
        url: 'https://kristinastennis.camp',
        photo: ''
    },
    { 
        source: 'https://github.com/ish-suarez/CookeCNC',
        name: `Cooke CNC`,
        url: null,
        photo: ''
    },
    {
        source: 'https://github.com/ish-suarez/projects/tree/dev',
        name: 'Personal Projects in Development.',
        url: null,
        photo: ''
    }
]

const Case = ({source, name, url}) => (
    <div className="flex flex-col w-1/2 md:w-1/3 border border-gray-50/10 h-60 bg-zinc-50/20 backdrop-blur-lg px-3 items-center justify-center font-software transition delay-200 ease-in-out hover:scale-105 hover:shadow-md hover:z-40">
        <a className="font-software text-zinc-50 hover:text-zinc-200" href={source} target='_blank' rel='noreferrer'>{name} - <span className="text-xs text-zinc-100">GitHub Repo</span></a>
        {url !== null && <a className="text-xs from-stone-700 text-zinc-600 hover:text-zinc-800" href={url} target='_blank' rel="noreferrer" >View Website: {url}</a>}
    </div>
    
)

export default function() {
    return (
        <div className=" relative flex flex-col items-center justify-center space-y-10 md:space-y-12 h-screen">
            <p className="text-zinc-200 text-3xl text-center font-fullstack">Case Studies</p>
            <div className="flex flex-wrap py-4 w-full">
                { 
                    cases.map(({source, name, url}) => (<Case source={source} name={name} url={url} />))
                }
            </div>
        </div>
    );
}