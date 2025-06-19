# Mongoose CRUD Operations

This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using [Mongoose](https://mongoosejs.com/) with Node.js and MongoDB.

## Prerequisites

- Node.js installed
- MongoDB running locally or accessible via URI
- [Mongoose](https://mongoosejs.com/) installed

## Setup

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd mongoose_CRUD
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure your MongoDB connection string in `.env` or directly in your code.

## Usage

### 1. Create

Add a new document to the collection.
```js
const newItem = new Model({ name: 'Sample', value: 42 });
await newItem.save();
```

### 2. Read

Find documents in the collection.
```js
const items = await Model.find({});
```

### 3. Update

Update an existing document.
```js
await Model.findByIdAndUpdate(id, { value: 100 });
```

### 4. Delete

Remove a document from the collection.
```js
await Model.findByIdAndDelete(id);
```

## Example

See `app.js` or the main source file for complete examples of each operation.

## License

MIT
