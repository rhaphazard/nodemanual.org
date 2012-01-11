/**
 * class fs.FSWatcher
 *
 * Objects returned from [[fs.watch `fs.watch()`]] are of this type.
 *
 *
**/  

/**
 * fs.FSWatcher.close() -> Void
 * 
 * Stop watching for changes on the given `fs.FSWatcher`.
**/ 


/**
 * fs.FSWatcher@change(event, filename) -> Void
 * - event (String): The event that occured, either `'rename'` or '`change'`
 * - filename (String): The name of the file which triggered the event
 * 
 * Emitted when something changes in a watched directory or file. See more details in [[fs.watch `fs.watch()`]].
 * 
**/ 


/**
 * fs.FSWatcher@error(exception) -> Void
 * - exception (Error): The exception that was caught
 * 
 * Emitted when an error occurs.
 *
**/ 
