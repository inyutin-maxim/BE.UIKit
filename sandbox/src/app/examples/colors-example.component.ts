import { Component } from "@angular/core"

@Component({
  selector: 'colors-example',
  template: `
  <section class="docs mat-typography">
    <h1>{{title}}</h1>
    <p>Description of the section</p>
    <h2>Primary colors in the interface</h2>
    <table class="docs_table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Hex</th>
          <th>RGBA</th>
          <th>Code name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>UI Primari</td>
          <td><div class="docs_color-preview docs_color-preview__h21-color-ui-primary"></div></td>
          <td>#0044d6</td>
          <td>0 68 214 100</td>
          <td>h21-color-ui-primary</td>
        </tr>
        <tr>
          <td>UI Primari light</td>
          <td><div class="docs_color-preview docs_color-preview__h21-color-ui-primary-light"></div></td>
          <td>#2c67e6</td>
          <td>44 103 230 100</td>
          <td>h21-color-ui-primary-light</td>
        </tr>
        <tr>
          <td>UI Accent</td>
          <td><div class="docs_color-preview docs_color-preview__h21-color-ui-accent"></div></td>
          <td>#28a745</td>
          <td>40 167 69 100</td>
          <td>h21-color-ui-accent</td>
        </tr>
        <tr>
          <td>UI Accent light</td>
          <td><div class="docs_color-preview docs_color-preview__h21-color-ui-accent-light"></div></td>
          <td>#3dcc5d</td>
          <td>61 204 93 100</td>
          <td>h21-color-ui-accent-light</td>
        </tr>
        <tr>
          <td>Gray</td>
          <td><div class="docs_color-preview docs_color-preview__h21-color-gray"></div></td>
          <td>#4A4A4A</td>
          <td>74 74 74 100</td>
          <td>h21-color-gray</td>
        </tr>
        <tr>
          <td>Gray Light</td>
          <td><div class="docs_color-preview docs_color-preview__h21-color-gray-light"></div></td>
          <td>#9B9B9B</td>
          <td>155 155 155 100</td>
          <td>h21-color-gray-light</td>
        </tr>
      </tbody>
    </table>
    <h2>Text</h2>
    <table class="docs_table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Hex</th>
          <th>RGBA</th>
          <th>Code name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Text primary</td>
          <td><div class="docs_color-preview docs_color-preview__h21-color-text-primary"></div></td>
          <td>#000000</td>
          <td>0 0 0 100</td>
          <td>h21-color-text-primary</td>
        </tr>
      </tbody>
    </table>    
    <h2>Background</h2>
    <table class="docs_table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Hex</th>
          <th>RGBA</th>
          <th>Code name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Background dark</td>
          <td><div class="docs_color-preview docs_color-preview__h21-color-bg-dark"></div></td>
          <td>#27334D</td>
          <td>39 51 77 100</td>
          <td>h21-color-bg-dark</td>
        </tr>
        <tr>
          <td>Background light</td>
          <td><div class="docs_color-preview docs_color-preview__h21-color-bg-light"></div></td>
          <td>#F9F7F7</td>
          <td>249 247 247 100</td>
          <td>h21-color-bg-light</td>
        </tr>
      </tbody>
    </table>
  </section>`
})

export class ColorsExampleComponent {
  title = 'Colors';
}
