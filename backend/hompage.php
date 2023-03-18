<?php
// Load the React app's index.html file
$html = file_get_contents('path/to/index.html');

// Replace the placeholder div with the React app's root element
$html = str_replace('<div id="root"></div>', '<div id="root">' . renderReactApp() . '</div>', $html);

// Output the modified HTML
echo $html;

// Render the React app's root element

// forgot to add the task # lol 
function renderReactApp() {

    $loop = \React\EventLoop\Factory::create();
    $factory = new \React\ChildProcess\ProcessFactory($loop);
    $reactphpRenderer = new \ReactPHPRenderer\ReactPHPRenderer($factory);

    $component = new MyReactComponent();

    return $reactphpRenderer->render($component);
}
?>


