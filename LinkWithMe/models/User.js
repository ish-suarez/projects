const res = require('express/lib/response');
const sql = require('../database/db'); // Importing Connection From Server

// Create Model
const Users = function(user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
}

// Create a User
Users.create = (newUser, result) => {
    sql.query("INSERT INTO link_with_me.user SET ?", newUser, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
    }
    console.log("created User: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
    });
};

// Find User By Id
Users.findById = (id, result) => {
    sql.query(`SELECT * FROM link_with_me.user WHERE id = ${id}`, (err, res) => {
        if(err) {
            console.log(`Err: ${err}`)
            result(err, null)
            return;
        }
        if(res.length) {
            console.log(`Found User: ${res[0]}`);
            result(null, res[0])
            return;
        }
        result({kind: 'not_found'}, null)
    });
};

// Get all Users
Users.getAll = (username, result) => {
    let query = "SELECT * FROM link_with_me.user";
    if (username) {
        query += `WHERE username LIKE '%${username}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
    }
        console.log("users: ", res);
        result(null, res);
    });
};

// Update Users
Users.updateById = (id, user, result) => {
    sql.query(
        'UPDATE link_with_me.user SET username = ?, email = ?, password = ? WHERE id = ?',
        [user.username, user.email, user.password, id],
        (err, res) => {
            if(err) {
                console.log(`Err: ${err}`);
                result(null, err);
                return;
            }
            if(response.affectedRows == 0) { // User Not Found
                result({ kind: 'not_found' }, null );
                return;
            }
            console.log(`Updated User: ${{ id: id, ...user }}`);
            result(null, { id: id, ...user })
        }
    );
};

// Delete User
Users.remove = (id, result) => {
    sql.query(`DELETE FROM link_with_me.user WHERE id = ${id}`, (err, res) => {
        if(err) {
            console.log(`Err: ${err}`);
            result(null, err);
            return;
        }
        if(res.affectedRows == 0 ) {
            result({kind: 'not_found'}, null); // No User Found
            return;
        }
        console.log(`Deleted User with id: ${id}`);
        result(null, res);
    });
};

// Remove all Users from database
Users.removeAll = result => {
    sql.query('DELETE FROM link_with_me.user', (err, res) => {
        if(err) {
            console.log(`Err: ${err}`);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} users`);
        result(null, res)
    })
}

module.exports = Users;