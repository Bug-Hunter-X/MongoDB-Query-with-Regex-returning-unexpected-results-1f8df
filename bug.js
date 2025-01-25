```javascript
const query = {
  field: { $regex: /pattern/i },
};

const cursor = db.collection('collectionName').find(query);

cursor.forEach((doc) => {
  // Process each document
  console.log(doc);
});
```