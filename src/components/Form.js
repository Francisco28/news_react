import React from 'react';
import styles from './Form.module.css';

const Form = () => {
    return ( 
        <div className={`row ${styles.searcher}`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Search news for category</h2>

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`btn-large amber darken-2 ${styles['btn-block']}`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Form;