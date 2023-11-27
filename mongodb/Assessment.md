- Write a MongoDB query to find all documents in a collection where the &quot;age&quot; field is greater than 25. <br />
```javascript
use collection_name

db.collection_name.find({ $gt: { $gte: 25 }})
```
<br />

- Write a MongoDB query to update the &quot;email&quot; field of a document with a specific ID.
```javascript
use collection_name

db.collection_name.findOneAndUpdate({ _id_: "uid" }, { $set: { "email": "new email" } })
```
<br />


- Write a MongoDB query to delete all documents in a collection where the &quot;status&quot; field is set to &quot;inactive&quot;.

```javascript
use collection_name

db.collection_name.deleteMany({ status: "inactive" })
```