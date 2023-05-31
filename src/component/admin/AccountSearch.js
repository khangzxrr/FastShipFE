import React from 'react'
import { useState } from 'react';
import { Button, Input} from 'antd'
import { Link } from 'react-router-dom'
const { Search } = Input;
export default function AccountSearch() {
    const onSearch = (value) => console.log(value);
    return (
        <div className='searchrevenue'>
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                    width: '100%',
                }}
            />
            <Link to='/admin-createaccount'>
            <Button>Create Account</Button>
            </Link>
        </div>
    )
}
