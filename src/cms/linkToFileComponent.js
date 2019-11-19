const LinkToFileComponent = {
  // Internal id of the component
  id: "LinkToFile",
  // Visible label
  label: "Link To File",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {name: 'text', label: 'Link Text', widget: 'string'},
    {name: 'file', label: 'File', widget: 'file' }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<a href="(.*)">(.*)<\/a>$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      file: match[1],
      text: match[2]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function({file, text}) {
    return `<a href="${file}">${text}</a>`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      `<a href="${obj.file}">${obj.text}</a>`
    );
  }
}

export default LinkToFileComponent
