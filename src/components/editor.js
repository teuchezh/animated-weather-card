import { LitElement, html } from 'lit';

export class AnimatedWeatherCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  // Disable shadow DOM to ensure Home Assistant components work correctly
  createRenderRoot() {
    return this;
  }

  setConfig(config) {
    this.config = config || {};
  }

  render() {
    if (!this.hass) {
      return html``;
    }

    return html`
      <style>
        .card-config {
          padding: 16px;
        }
        .option {
          padding: 8px 0;
        }
        label {
          display: flex;
          align-items: center;
          padding: 8px 0;
        }
        .label {
          flex: 1;
          margin-right: 8px;
        }
        ha-entity-picker,
        ha-textfield {
          width: 100%;
        }
        ha-switch {
          margin-left: auto;
        }
      </style>
      <div class="card-config">
        <div class="option">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this.config.entity}
            .configValue=${'entity'}
            .label=${'Weather Entity'}
            .includeDomains=${['weather']}
            @value-changed=${this._valueChanged}
          ></ha-entity-picker>
        </div>

        <div class="option">
          <ha-textfield
            .label=${'Name (optional)'}
            .value=${this.config.name || ''}
            .configValue=${'name'}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="option">
          <ha-textfield
            .label=${'Height in pixels (optional, default: 200)'}
            .value=${this.config.height || ''}
            .configValue=${'height'}
            type="number"
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="option">
          <label>
            <span class="label">Show "Feels Like" temperature</span>
            <ha-switch
              .checked=${this.config.show_feels_like !== false}
              .configValue=${'show_feels_like'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Minimum Temperature</span>
            <ha-switch
              .checked=${this.config.show_min_temp !== false}
              .configValue=${'show_min_temp'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Humidity</span>
            <ha-switch
              .checked=${this.config.show_humidity !== false}
              .configValue=${'show_humidity'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Wind Speed</span>
            <ha-switch
              .checked=${this.config.show_wind !== false}
              .configValue=${'show_wind'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Wind Direction</span>
            <ha-switch
              .checked=${this.config.show_wind_direction !== false}
              .configValue=${'show_wind_direction'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Wind Gust</span>
            <ha-switch
              .checked=${this.config.show_wind_gust !== false}
              .configValue=${'show_wind_gust'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Today Forecast</span>
            <ha-switch
              .checked=${this.config.show_forecast === true}
              .configValue=${'show_forecast'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Sunrise/Sunset</span>
            <ha-switch
              .checked=${this.config.show_sunrise_sunset !== false}
              .configValue=${'show_sunrise_sunset'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>
      </div>
    `;
  }

  _valueChanged(ev) {
    if (!this.config) {
      return;
    }
    const target = ev.target;
    if (target.configValue) {
      const value = target.checked !== undefined ? target.checked : target.value;
      if (value === '' || value === null) {
        delete this.config[target.configValue];
      } else {
        if (target.configValue === 'height') {
          this.config[target.configValue] = parseInt(value) || null;
        } else {
          this.config[target.configValue] = value;
        }
      }
    }
    const event = new CustomEvent('config-changed', {
      detail: { config: this.config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}
