import './Dog-table.styles.css'

const DEFAULT_HEADERS = ['Name', 'Breed'];

const DogTable = ({tableHeaders = DEFAULT_HEADERS, tableContent=[], openDetails}) => {
    const header = tableHeaders.map((header,index) => <th key={index}>{header}</th>)
    
    const content = tableContent.map((content, index) => <tr key={content.id} onClick={()=>{openDetails(index)}}>
        <td>Dog Name</td>
        <td>{content.breeds[0] ? content.breeds[0].name: 'Not Exists'}</td>
        </tr>)
    return (
        <table className="dog-table">
            <thead>
                <tr>
                    {header}
                </tr>
            </thead>
            <tbody>
                { content }
            </tbody>
        </table>
    )
}

export default DogTable