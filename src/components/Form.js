import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

//api = 45ef01eae29e45318b02524541456fd9
const Form = ({saveCategory}) => {

    const OPTIONS = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Business' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health', label: 'Health' },
        { value: 'science', label: 'Science' },
        { value: 'technology', label: 'Technology' },
    ];

    //utility custom hook
    const [ category, SelectNews ] = useSelect('general', OPTIONS);

    //submit to form, pass category to app.js
    const searchNews = e => {
        e.preventDefault();
        
        saveCategory(category);
    }

    return ( 
        <div className={`row ${styles.searcher}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Search news for category</h2>

                    <SelectNews />

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