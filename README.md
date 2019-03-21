# enqueuer-plugin-xml-parser
[![npm version](https://badge.fury.io/js/enqueuer-plugin-xml-parser.svg)](https://badge.fury.io/js/enqueuer-plugin-xml-parser) [![Build Status](https://travis-ci.org/enqueuer-land/enqueuer-plugin-xml-parser.svg?branch=master)](https://travis-ci.org/enqueuer-land/enqueuer-plugin-xml-parser) [![Greenkeeper badge](https://badges.greenkeeper.io/lopidio/enqueuer-plugin-xml-parser.svg)](https://greenkeeper.io/)

Enqueuer plugin to enable xml parsing
#### Usage
    $ npm install enqueuer enqueuer-plugin-xml-parser
    $ nqr -a <testing-file> -l enqueuer-plugin-xml-parser



##### Options
You can pass optional arguments to parse:

**preserveAttributes**  
This optional property, when set to true, will cause all XML attributes to be kept separate in their own sub-object called _Attribs for each element.

**lowerCase**  
This optional property, when set to true, will cause all keys to be lower-cased as the XML is parsed. This affects both elements and attributes. Example:

**preserveDocumentNode**  
If you want the outermost root node (also called the document node) preserved when parsing, set the preserveDocumentNode property to true when parsing. Example:

**preserveWhitespace**  
If you want to preserve whitespace before and after text inside elements, set the preserveWhitespace flag to a true value. Note that this has no effect on attributes (whitespace is always preserved there), nor does it effect whitespace between complex elements. Example:

**preserveDocumentNode**  
By default single elements are not represented as arrays, until another element with the same appears at the same level in the XML tree. However, if you want to force every element into an array all the time, even when there is only a single element with a given name, set the forceArrays property to true. Example:

###### Example
    
    <<xml://path/to/file.xml?preserveAttributes=false&preserveDocumentNode=true&preserveDocumentNode>>
