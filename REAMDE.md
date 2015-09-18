# linkify citations

Scans the DOM for legal citations, finds them, and turns them into HTML links.

## Usage

```
<script src="https://s3.amazonaws.com/linkify-citations/linkify-citations.js"></script>
```

## Development/deployment

Pull requests merged into `master` will automatically be deployed to the S3 bucket. To test things out, you might want to try [rawgit](https://rawgit.com).

### Dependencies

None! Everything is self-contained. Under the hood, a lot of the heavy lifting is done by [citation.js](https://github.com/unitedstates/citation) ([demo](https://theunitedstates.io/citation/)).
