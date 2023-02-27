import React from "react";


const AuthorItem = ({one_author}) => {
    return (
        <tr>
            <td>
                {one_author.first_name}
            </td>
            <td>
                {one_author.last_name}
            </td>
            <td>
                {one_author.birthday}
            </td>
        </tr>
    )
};


const AuthorList = ({authors}) => {
    return (
        <table>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Birthday year
            </th>
            {authors.map((author_from_authors) => <AuthorItem one_author={author_from_authors} />)}
        </table>
    )
};

export default AuthorList;