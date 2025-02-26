import '../styles/Counter.css'

export default function Counter({ count }) {
    return (
        <div className='counter'>
            PAGE VIEWS: {count}
        </div>
    )
}