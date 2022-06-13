import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { searchIcon } from '../../constants/icons';
import { Input, Button } from '../';
import './styles/SearchField.css';


const SearchField = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchListRef = useRef(null);
    const { pathname } = useLocation();

    const handleClickOutside = (event) => {
        if (searchListRef.current && !searchListRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mouseup', handleClickOutside);

        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, [searchListRef]);

    useEffect(() => {
        let promise = null;
        if (searchQuery.length > 0) {
            console.log('searchQuery', searchQuery);
        }

        return () => {
            promise && promise.abort();
        }
    }, [searchQuery]);

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false);
        }
    }, [pathname]);

    return (
        <div className="search">
            <Input
                type="text"
                label="Search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if(e.target.value.length > 0) {
                        setIsOpen(true);
                    } else {
                        setIsOpen(false);
                    }
                }}
                icon={searchIcon}
            />
            <div className={`search-results${searchQuery && isOpen ? '' : ' d-none'}`}>
                <div className="flex justify-between">
                    <h3 className="fs-3 px-2">Search Results</h3>
                    <div className="mx-4">
                        <Button
                            onClick={() => {
                                setSearchQuery('');
                                setIsOpen(false);
                            }}
                        >
                            Clear
                        </Button>
                    </div>
                </div>
                <div 
                    className="search-list"
                    ref={searchListRef}
                >
                    Content
                </div>
            </div>
        </div>
    )
}

export default SearchField