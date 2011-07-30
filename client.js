
<script type="text/javascript" src="http://localhost:8000/faye.js">
  </script>
 <script type="text/javascript">
var client = new Faye.Client('http://localhost:8000/faye.js', timeout:120);

client.publish('/foo', {message: 'Hi there'});

