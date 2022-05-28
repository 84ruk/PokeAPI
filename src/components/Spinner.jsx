import styles from '../styles/Spinner.css';

export const Spinner = () => {
  return (
    <div className="spinner w-full py-24 m-auto px-10 flex max-w-screen-2xl justify-center ">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>
  )
}
