import styles from '../styles/Spinner.css';

export const Spinner = () => {
  return (
    <div className="spinner w-fit h-80 py-10 m-auto px-10 flex max-w-screen-2xl items-center ">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>
  )
}
