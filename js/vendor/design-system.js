/* @ds-bundle: {"format":4,"namespace":"VelorixAIDesignSystem_369328","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Icon","sourcePath":"components/buttons/Icon.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"MetricStat","sourcePath":"components/data/MetricStat.jsx"},{"name":"PricingTier","sourcePath":"components/data/PricingTier.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Band","sourcePath":"components/layout/Band.jsx"},{"name":"Grid","sourcePath":"components/layout/Grid.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SidebarRow","sourcePath":"components/navigation/SidebarRow.jsx"},{"name":"Badge","sourcePath":"components/surfaces/Badge.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"EmptyState","sourcePath":"components/surfaces/EmptyState.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"},{"name":"Modal","sourcePath":"components/surfaces/Modal.jsx"},{"name":"Toast","sourcePath":"components/surfaces/Toast.jsx"},{"name":"Display","sourcePath":"components/typography/Display.jsx"},{"name":"Divider","sourcePath":"components/typography/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/typography/Eyebrow.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"998adde3e8d3","components/buttons/Icon.jsx":"51f190048ffb","components/buttons/IconButton.jsx":"7378340eacec","components/data/DataTable.jsx":"bc72bf98ff2c","components/data/MetricStat.jsx":"6ad1ba1dc25c","components/data/PricingTier.jsx":"3898132c9180","components/forms/Checkbox.jsx":"c5caea8d8bd7","components/forms/Input.jsx":"ad18db815b2d","components/forms/Select.jsx":"09da9fe69b4d","components/layout/Band.jsx":"e1afb986da68","components/layout/Grid.jsx":"2daaa9c30e20","components/navigation/Footer.jsx":"1f327f317626","components/navigation/NavBar.jsx":"db2850e87b43","components/navigation/SidebarRow.jsx":"8feb8f2937f0","components/surfaces/Badge.jsx":"1bf571232fb5","components/surfaces/Card.jsx":"a6a4285c0e3b","components/surfaces/EmptyState.jsx":"596fe79080d1","components/surfaces/FeatureCard.jsx":"47ae3cb3e1fa","components/surfaces/Modal.jsx":"9570e026d52c","components/surfaces/Toast.jsx":"ad9e074f86f5","components/typography/Display.jsx":"905509068dd7","components/typography/Divider.jsx":"0a418185bc46","components/typography/Eyebrow.jsx":"5e1ee71c22f4","ui_kits/console/Console.jsx":"4c157c897823","ui_kits/console/Login.jsx":"a0441b2c4a86","ui_kits/console/Screens.jsx":"c44a4afb81dc","ui_kits/marketing/Home.jsx":"363a8ce10250","ui_kits/marketing/Pricing.jsx":"aef978fe4b40","ui_kits/marketing/Site.jsx":"ff6c968af423"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VelorixAIDesignSystem_369328 = window.VelorixAIDesignSystem_369328 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizePad = {
  md: "8px 16px",
  sm: "4px 12px"
};
function Button({
  variant = "outline",
  size = "md",
  as = "button",
  href,
  children,
  style,
  disabled,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-sm)",
    fontFamily: "var(--font-body)",
    fontWeight: 400,
    fontSize: "var(--type-button-md-size)",
    lineHeight: "var(--type-button-md-line)",
    padding: sizePad[size] || sizePad.md,
    borderRadius: "var(--radius-pill)",
    borderStyle: "solid",
    borderWidth: "var(--border-width)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    boxShadow: "none",
    transition: "background-color 150ms ease, border-color 150ms ease"
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      borderColor: "var(--color-primary)"
    },
    outline: {
      background: "transparent",
      color: "var(--color-ink)",
      borderColor: "var(--border-translucent)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-body)",
      borderColor: "transparent"
    }
  };
  const Tag = href ? "a" : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === "button" ? disabled : undefined,
    style: {
      ...base,
      ...(variants[variant] || variants.outline),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Icon.jsx
try { (() => {
/**
 * Lucide glyph. Requires the Lucide CDN script on the page:
 * <script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.js"></script>
 */
function Icon({
  name,
  size = 16,
  strokeWidth = 1.5,
  color = "currentColor",
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    el.appendChild(i);
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        "stroke-width": strokeWidth,
        stroke: color
      },
      nameAttr: "data-lucide"
    });
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      flexShrink: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  children,
  size = 36,
  variant = "outline",
  style,
  ...rest
}) {
  const iconBtnVariants = {
    outline: {
      background: "transparent",
      borderColor: "var(--border-translucent)",
      color: "var(--color-ink)"
    },
    ghost: {
      background: "transparent",
      borderColor: "transparent",
      color: "var(--color-body)"
    },
    primary: {
      background: "var(--color-primary)",
      borderColor: "var(--color-primary)",
      color: "var(--color-on-primary)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      borderStyle: "solid",
      borderWidth: "var(--border-width)",
      cursor: "pointer",
      padding: 0,
      boxShadow: "none",
      ...(iconBtnVariants[variant] || iconBtnVariants.outline),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  style
}) {
  const headCell = {
    fontFamily: "var(--font-mono)",
    textTransform: "uppercase",
    textAlign: "left",
    fontSize: "var(--type-caption-mono-sm-size)",
    lineHeight: "var(--type-caption-mono-sm-line)",
    letterSpacing: "var(--type-caption-mono-sm-track)",
    color: "var(--color-body-mid)",
    padding: "12px 16px",
    fontWeight: 400,
    background: "var(--color-canvas-soft)"
  };
  const bodyCell = {
    fontFamily: "var(--font-body)",
    fontSize: "var(--type-body-sm-size)",
    lineHeight: "var(--type-body-sm-line)",
    color: "var(--color-body)",
    padding: "12px 16px",
    borderTop: "var(--border-width) solid var(--color-hairline)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "var(--border-width) solid var(--color-hairline)",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key || c,
    style: headCell
  }, c.label || c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => {
    const k = c.key || c;
    return /*#__PURE__*/React.createElement("td", {
      key: k,
      style: {
        ...bodyCell,
        color: c.primary ? "var(--color-ink)" : bodyCell.color,
        fontFamily: c.mono ? "var(--font-mono)" : bodyCell.fontFamily
      }
    }, r[k]);
  }))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-md)",
      cursor: "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 4,
      flexShrink: 0,
      border: "var(--border-width) solid " + (checked ? "var(--color-primary)" : "var(--border-translucent)"),
      background: checked ? "var(--color-primary)" : "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: "var(--color-on-primary)",
      borderRadius: 1
    }
  }) : null), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-line)",
      color: "var(--color-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  invalid,
  style,
  id,
  ...rest
}) {
  const inputId = id || rest.name;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      textTransform: "uppercase",
      fontSize: "var(--type-caption-mono-sm-size)",
      lineHeight: "var(--type-caption-mono-sm-line)",
      letterSpacing: "var(--type-caption-mono-sm-track)",
      color: "var(--color-body-mid)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      background: "var(--color-canvas-soft)",
      color: "var(--color-ink)",
      border: "var(--border-width) solid " + (invalid ? "var(--border-translucent-strong)" : "var(--color-hairline)"),
      borderRadius: "var(--radius-sm)",
      padding: "12px 16px",
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: "var(--type-body-md-size)",
      lineHeight: "var(--type-body-md-line)",
      outline: "none",
      width: "100%",
      ...style
    }
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-line)",
      color: invalid ? "var(--color-ink)" : "var(--color-body-mid)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  style,
  id,
  ...rest
}) {
  const selectId = id || rest.name;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      textTransform: "uppercase",
      fontSize: "var(--type-caption-mono-sm-size)",
      letterSpacing: "var(--type-caption-mono-sm-track)",
      color: "var(--color-body-mid)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    style: {
      background: "var(--color-canvas-soft)",
      color: "var(--color-ink)",
      border: "var(--border-width) solid var(--color-hairline)",
      borderRadius: "var(--radius-sm)",
      padding: "12px 16px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-md-size)",
      lineHeight: "var(--type-body-md-line)",
      outline: "none",
      appearance: "none",
      width: "100%",
      ...style
    }
  }, rest), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/layout/Grid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Grid({
  columns = 2,
  gap = "var(--space-xl)",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + columns + ", minmax(0, 1fr))",
      gap,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Grid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Grid.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  brand = "VELORIX",
  links = [],
  actions,
  sticky = true,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? "sticky" : "static",
      top: 0,
      zIndex: 20,
      background: "var(--color-canvas)",
      borderBottom: "var(--border-width) solid var(--color-hairline)",
      padding: "var(--space-md) var(--space-xl)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2xl)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "18px",
      letterSpacing: "-0.4px",
      color: "var(--color-ink)",
      textDecoration: "none"
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xl)",
      marginRight: "auto"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || "#",
    onClick: l.onClick,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-line)",
      color: l.active ? "var(--color-ink)" : "var(--color-body)",
      textDecoration: "none"
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)"
    }
  }, actions || /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: "#"
  }, "Try Velorix"))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarRow.jsx
try { (() => {
function SidebarRow({
  label,
  icon,
  active,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-md)",
      width: "100%",
      background: active ? "var(--color-canvas-soft)" : "transparent",
      border: "var(--border-width) solid " + (active ? "var(--color-hairline)" : "transparent"),
      borderRadius: "var(--radius-sm)",
      padding: "8px 12px",
      cursor: "pointer",
      textAlign: "left",
      color: active ? "var(--color-ink)" : "var(--color-body-mid)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-line)",
      ...style
    }
  }, icon, /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: "auto"
    }
  }, label), active ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: "var(--radius-full)",
      background: "var(--color-primary)"
    }
  }) : null);
}
Object.assign(__ds_scope, { SidebarRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarRow.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = "outline",
  style,
  ...rest
}) {
  const badgeTones = {
    outline: {
      background: "transparent",
      borderColor: "var(--border-translucent)",
      color: "var(--color-ink)"
    },
    solid: {
      background: "var(--color-primary)",
      borderColor: "var(--color-primary)",
      color: "var(--color-on-primary)"
    },
    mute: {
      background: "var(--color-canvas-soft)",
      borderColor: "var(--color-hairline)",
      color: "var(--color-body-mid)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      borderRadius: "var(--radius-pill)",
      borderStyle: "solid",
      borderWidth: "var(--border-width)",
      padding: "2px 12px",
      fontFamily: "var(--font-mono)",
      textTransform: "uppercase",
      fontSize: "var(--type-caption-mono-sm-size)",
      lineHeight: "var(--type-caption-mono-sm-line)",
      letterSpacing: "var(--type-caption-mono-sm-track)",
      ...(badgeTones[tone] || badgeTones.outline),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Badge.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = "card",
  padding = "var(--space-xl)",
  children,
  style,
  ...rest
}) {
  const cardTones = {
    card: {
      background: "var(--color-canvas-card)"
    },
    soft: {
      background: "var(--color-canvas-soft)"
    },
    inverted: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      borderColor: "var(--color-primary)"
    },
    bare: {
      background: "transparent"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "var(--border-width) solid var(--color-hairline)",
      borderRadius: "var(--radius-sm)",
      padding,
      color: "var(--color-ink)",
      boxShadow: "none",
      ...(cardTones[tone] || cardTones.card),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Modal.jsx
try { (() => {
function Modal({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(10,10,10,0.72)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-xl)",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      width,
      maxWidth: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--type-display-xs-size)",
      lineHeight: "var(--type-display-xs-line)"
    }
  }, title), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    size: 28,
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-line)",
      color: "var(--color-body)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-sm)",
      justifyContent: "flex-end"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Modal.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  children,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-lg)",
      background: "var(--color-canvas-soft)",
      border: "var(--border-width) solid var(--color-hairline)",
      borderRadius: "var(--radius-sm)",
      padding: "12px 16px",
      color: "var(--color-ink)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-line)",
      boxShadow: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), action);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Toast.jsx", error: String((e && e.message) || e) }); }

// components/typography/Display.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const displayScale = {
  xl: ["var(--type-display-xl-size)", "var(--type-display-xl-line)", "var(--type-display-xl-track)"],
  lg: ["var(--type-display-lg-size)", "var(--type-display-lg-line)", "var(--type-display-lg-track)"],
  md: ["var(--type-display-md-size)", "var(--type-display-md-line)", "var(--type-display-md-track)"],
  sm: ["var(--type-display-sm-size)", "var(--type-display-sm-line)", "var(--type-display-sm-track)"],
  xs: ["var(--type-display-xs-size)", "var(--type-display-xs-line)", "var(--type-display-xs-track)"]
};
function Display({
  size = "md",
  as: Tag = "h2",
  children,
  style,
  ...rest
}) {
  const [fs, lh, ls] = displayScale[size] || displayScale.md;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "vx-display-" + size,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: fs,
      lineHeight: lh,
      letterSpacing: ls,
      margin: 0,
      color: "var(--color-ink)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Display });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Display.jsx", error: String((e && e.message) || e) }); }

// components/typography/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  vertical = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: vertical ? {
      width: 1,
      alignSelf: "stretch",
      background: "var(--color-hairline)",
      ...style
    } : {
      height: 1,
      width: "100%",
      background: "var(--color-hairline)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Divider.jsx", error: String((e && e.message) || e) }); }

// components/typography/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  size = "md",
  color = "var(--color-ink)",
  style,
  ...rest
}) {
  const s = size === "sm" ? {
    fontSize: "var(--type-caption-mono-sm-size)",
    lineHeight: "var(--type-caption-mono-sm-line)",
    letterSpacing: "var(--type-caption-mono-sm-track)"
  } : {
    fontSize: "var(--type-caption-mono-size)",
    lineHeight: "var(--type-caption-mono-line)",
    letterSpacing: "var(--type-caption-mono-track)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 400,
      textTransform: "uppercase",
      color,
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricStat.jsx
try { (() => {
function MetricStat({
  label,
  value,
  note,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 400,
      fontSize: "var(--type-display-sm-size)",
      lineHeight: "var(--type-display-sm-line)",
      letterSpacing: "-0.6px",
      color: "var(--color-ink)"
    }
  }, value), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-line)",
      color: "var(--color-body-mid)"
    }
  }, note) : null);
}
Object.assign(__ds_scope, { MetricStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricStat.jsx", error: String((e && e.message) || e) }); }

// components/data/PricingTier.jsx
try { (() => {
function PricingTier({
  name,
  price,
  unit = "/ month",
  features = [],
  cta = "Get started",
  featured = false,
  style
}) {
  const inv = featured;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: inv ? "inverted" : "card",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    size: "sm",
    color: inv ? "rgba(10,10,10,0.6)" : "var(--color-body-mid)"
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      flexWrap: "wrap",
      minWidth: 0,
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--type-display-sm-size)",
      lineHeight: "var(--type-display-sm-line)",
      letterSpacing: "var(--type-display-sm-track)"
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-caption-mono-sm-size)",
      letterSpacing: "var(--type-caption-mono-sm-track)",
      textTransform: "uppercase",
      color: inv ? "rgba(10,10,10,0.6)" : "var(--color-body-mid)"
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, features.map(ft => /*#__PURE__*/React.createElement("div", {
    key: ft,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-line)",
      color: inv ? "rgba(10,10,10,0.75)" : "var(--color-body)"
    }
  }, ft))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: inv ? "primary" : "outline",
    style: inv ? {
      background: "var(--color-on-primary)",
      color: "var(--color-primary)",
      borderColor: "var(--color-on-primary)"
    } : undefined
  }, cta)));
}
Object.assign(__ds_scope, { PricingTier });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/PricingTier.jsx", error: String((e && e.message) || e) }); }

// components/layout/Band.jsx
try { (() => {
function Band({
  eyebrow,
  title,
  titleSize = "md",
  lead,
  actions,
  children,
  hairline = true,
  align = "left",
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-canvas)",
      padding: "var(--space-4xl) var(--space-xl)",
      borderBottom: hairline ? "var(--border-width) solid var(--color-hairline)" : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xl)",
      alignItems: align === "center" ? "center" : "stretch",
      textAlign: align
    }
  }, eyebrow || title || lead ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)",
      maxWidth: titleSize === "xl" ? 900 : 720
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    className: "vx-display-" + titleSize,
    style: {
      margin: 0,
      color: "var(--color-ink)"
    }
  }, title) : null, lead ? /*#__PURE__*/React.createElement("p", {
    className: "vx-body-lg",
    style: {
      margin: 0,
      color: "var(--color-body)"
    }
  }, lead) : null) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)",
      flexWrap: "wrap",
      justifyContent: align === "center" ? "center" : "flex-start"
    }
  }, actions) : null, children));
}
Object.assign(__ds_scope, { Band });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Band.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  brand = "VELORIX",
  columns = [],
  note,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-canvas)",
      borderTop: "var(--border-width) solid var(--color-hairline)",
      padding: "var(--space-3xl) var(--space-xl)",
      color: "var(--color-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginRight: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "18px",
      letterSpacing: "-0.4px",
      color: "var(--color-ink)"
    }
  }, brand), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-line)",
      color: "var(--color-body-mid)",
      maxWidth: 280
    }
  }, note) : null), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-line)",
      color: "var(--color-body)",
      textDecoration: "none"
    }
  }, l))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/EmptyState.jsx
try { (() => {
function EmptyState({
  caption,
  title,
  children,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "var(--space-3xl)",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-md)",
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "var(--radius-full)",
      border: "var(--border-width) solid var(--border-translucent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "var(--space-sm)"
    }
  }, children), caption ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, caption) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--type-display-xs-size)",
      lineHeight: "var(--type-display-xs-line)"
    }
  }, title), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureCard({
  eyebrow,
  title,
  body,
  cta,
  href = "#",
  media,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    padding: "var(--space-xl)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)",
      ...style
    }
  }, rest), media ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      background: "var(--color-accent-midnight)",
      minHeight: 160,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, media) : null, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--type-display-sm-size)",
      lineHeight: "var(--type-display-sm-line)",
      letterSpacing: "var(--type-display-sm-track)"
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-md-size)",
      lineHeight: "var(--type-body-md-line)",
      color: "var(--color-body)"
    }
  }, body) : null), cta ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: href
  }, cta)) : null);
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Console.jsx
try { (() => {
const CC = window.VelorixAIDesignSystem_369328;
function Console() {
  const {
    SidebarRow,
    Icon,
    Button,
    IconButton,
    Divider,
    Display,
    Eyebrow,
    Modal,
    Toast,
    Badge
  } = CC;
  const [authed, setAuthed] = React.useState(true);
  const [tab, setTab] = React.useState("Overview");
  const [keys, setKeys] = React.useState([{
    name: "Production",
    id: "vx-live-9f2e…c41",
    created: "2026-06-02",
    used: "2m ago"
  }, {
    name: "Staging",
    id: "vx-test-41ab…7de",
    created: "2026-07-19",
    used: "3h ago"
  }]);
  const [modal, setModal] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);
  if (!authed) return /*#__PURE__*/React.createElement(Login, {
    onSignIn: () => setAuthed(true)
  });
  const nav = [["Overview", "layout-dashboard"], ["API keys", "key"], ["Playground", "terminal"], ["Billing", "credit-card"]];
  const body = {
    "Overview": /*#__PURE__*/React.createElement(Overview, null),
    "API keys": /*#__PURE__*/React.createElement(Keys, {
      keys: keys,
      onCreate: () => setModal(true),
      onRevoke: () => {
        setKeys(k => k.slice(0, -1));
        setToast("Key revoked");
      }
    }),
    "Playground": /*#__PURE__*/React.createElement(Playground, null),
    "Billing": /*#__PURE__*/React.createElement(Billing, null)
  }[tab];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "248px 1fr",
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      borderRight: "1px solid var(--color-hairline)",
      padding: "16px 12px",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      letterSpacing: "-0.4px"
    }
  }, "VELORIX"), /*#__PURE__*/React.createElement(Badge, {
    tone: "mute"
  }, "Console")), nav.map(([label, icon]) => /*#__PURE__*/React.createElement(SidebarRow, {
    key: label,
    label: label,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: icon
    }),
    active: tab === label,
    onClick: () => setTab(label)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "var(--radius-full)",
      border: "1px solid var(--border-translucent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11
    }
  }, "AK"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: "18px",
      color: "var(--color-body)",
      marginRight: "auto"
    }
  }, "a.kessler"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Sign out",
    size: 28,
    variant: "ghost",
    onClick: () => setAuthed(false)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 14
  }))))), /*#__PURE__*/React.createElement("main", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "20px 32px",
      borderBottom: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, "Acme Robotics"), /*#__PURE__*/React.createElement(Display, {
    size: "xs",
    as: "h1"
  }, tab)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Docs"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: () => setModal(true)
  }, "New key"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, body)), /*#__PURE__*/React.createElement(Modal, {
    open: modal,
    title: "Create API key",
    onClose: () => setModal(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setModal(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => {
        setKeys(k => [...k, {
          name: "New key",
          id: "vx-live-" + Math.random().toString(16).slice(2, 6) + "…" + Math.random().toString(16).slice(2, 5),
          created: "2026-09-01",
          used: "never"
        }]);
        setModal(false);
        setTab("API keys");
        setToast("Key created");
      }
    }, "Create key"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CC.Input, {
    name: "key-name",
    label: "Name",
    placeholder: "Production"
  }), /*#__PURE__*/React.createElement(CC.Select, {
    name: "key-scope",
    label: "Scope",
    options: ["All models", "Text only", "Voice only"]
  }))), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 24,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, null, toast)) : null);
}
Object.assign(window, {
  Console
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Console.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Login.jsx
try { (() => {
const CL = window.VelorixAIDesignSystem_369328;
function Login({
  onSignIn
}) {
  const {
    Card,
    Button,
    Input,
    Eyebrow,
    Divider,
    Display
  } = CL;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      letterSpacing: "-0.4px",
      textAlign: "center"
    }
  }, "VELORIX"), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, "Console"), /*#__PURE__*/React.createElement(Display, {
    size: "xs",
    as: "h1"
  }, "Sign in")), /*#__PURE__*/React.createElement(Input, {
    name: "email",
    label: "Email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Input, {
    name: "password",
    label: "Password",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onSignIn,
    style: {
      padding: "12px 20px",
      justifyContent: "center"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Button, {
    onClick: onSignIn,
    style: {
      padding: "12px 20px",
      justifyContent: "center"
    }
  }, "Continue with SSO")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      color: "var(--color-body-mid)",
      textAlign: "center"
    }
  }, "No account? Request access")));
}
Object.assign(window, {
  Login
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Screens.jsx
try { (() => {
const CS = window.VelorixAIDesignSystem_369328;
function Overview() {
  const {
    Card,
    Eyebrow,
    MetricStat,
    DataTable,
    Divider,
    Badge
  } = CS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, [["Tokens today", "1.24M", "+18% vs yesterday"], ["Requests", "8,402", "p50 240ms"], ["Spend, month", "$412.80", "of $2,000 cap"], ["Error rate", "0.06%", "last 24h"]].map(([l, v, n]) => /*#__PURE__*/React.createElement(Card, {
    key: l
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: l,
    value: v,
    note: n
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "14px 20px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, "Requests, 14 days"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "mute"
  }, "UTC"))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 8,
      height: 160,
      padding: 20
    }
  }, [38, 52, 44, 61, 73, 58, 80, 69, 91, 77, 96, 88, 104, 99].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: h + "%",
      background: i === 13 ? "var(--color-primary)" : "rgba(255,255,255,0.16)",
      borderRadius: 2
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "m",
      label: "Model",
      primary: true
    }, {
      key: "r",
      label: "Requests",
      mono: true
    }, {
      key: "t",
      label: "Tokens",
      mono: true
    }, {
      key: "c",
      label: "Cost",
      mono: true
    }],
    rows: [{
      m: "velorix-3",
      r: "5,120",
      t: "820K",
      c: "$316.40"
    }, {
      m: "velorix-3-mini",
      r: "3,004",
      t: "390K",
      c: "$81.90"
    }, {
      m: "velorix-voice",
      r: "278",
      t: "31K",
      c: "$14.50"
    }]
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, "Changelog"), [["Sep 01", "velorix-3 pricing reduced 20%"], ["Aug 24", "Streaming tool calls in GA"], ["Aug 11", "256K context for all tiers"]].map(([d, t]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: "flex",
      gap: 12,
      fontSize: 14,
      lineHeight: "20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "1.2px",
      color: "var(--color-body-mid)",
      minWidth: 52
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-body)"
    }
  }, t))))));
}
function Keys({
  keys,
  onCreate,
  onRevoke
}) {
  const {
    Card,
    Button,
    DataTable,
    EmptyState,
    Icon,
    Eyebrow,
    Divider,
    Badge
  } = CS;
  if (!keys.length) return /*#__PURE__*/React.createElement(EmptyState, {
    caption: "No keys",
    title: "Create your first API key",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onCreate
    }, "New key")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "key",
    size: 20
  }));
  return /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 20px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, "API keys"), /*#__PURE__*/React.createElement(Badge, {
    tone: "mute"
  }, keys.length, " active"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onRevoke
  }, "Revoke last"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: onCreate
  }, "New key"))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(DataTable, {
    style: {
      border: "none",
      borderRadius: 0
    },
    columns: [{
      key: "name",
      label: "Name",
      primary: true
    }, {
      key: "id",
      label: "Secret",
      mono: true
    }, {
      key: "created",
      label: "Created",
      mono: true
    }, {
      key: "used",
      label: "Last used",
      mono: true
    }],
    rows: keys
  }));
}
function Playground() {
  const {
    Card,
    Button,
    Select,
    Input,
    Eyebrow,
    Divider,
    Badge,
    Icon
  } = CS;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 300px",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 20px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, "Playground"), /*#__PURE__*/React.createElement(Badge, null, "velorix-3")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "flex-end",
      maxWidth: "70%",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid var(--border-translucent)",
      borderRadius: 12,
      padding: "10px 14px",
      fontSize: 14,
      lineHeight: "20px"
    }
  }, "Summarise this changelog for a release note."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "flex-start",
      maxWidth: "80%",
      background: "var(--color-canvas-soft)",
      border: "1px solid var(--color-hairline)",
      borderRadius: 12,
      padding: "10px 14px",
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--color-body)"
    }
  }, "Pricing for velorix-3 drops 20%, streaming tool calls reach general availability, and the 256K context window is now on every tier.") : null), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    name: "prompt",
    placeholder: "Send a message"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setSent(true),
    style: {
      padding: "10px 16px"
    }
  }, "Run ", /*#__PURE__*/React.createElement(Icon, {
    name: "corner-down-left",
    size: 14
  })))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, "Parameters"), /*#__PURE__*/React.createElement(Select, {
    name: "pg-model",
    label: "Model",
    options: ["velorix-3", "velorix-3-mini", "velorix-voice"]
  }), /*#__PURE__*/React.createElement(Input, {
    name: "temp",
    label: "Temperature",
    defaultValue: "0.7"
  }), /*#__PURE__*/React.createElement(Input, {
    name: "max",
    label: "Max tokens",
    defaultValue: "2048"
  }), /*#__PURE__*/React.createElement(CS.Checkbox, {
    label: "Stream response",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(CS.Checkbox, {
    label: "Enable tools",
    checked: false,
    onChange: () => {}
  })));
}
function Billing() {
  const {
    Grid,
    PricingTier,
    Band,
    Card,
    DataTable,
    Eyebrow
  } = CS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    columns: 3
  }, /*#__PURE__*/React.createElement(PricingTier, {
    name: "Free",
    price: "$0",
    cta: "Current plan",
    features: ["10K tokens / day", "Mini model only"]
  }), /*#__PURE__*/React.createElement(PricingTier, {
    name: "Pro",
    price: "$30",
    cta: "Upgrade",
    featured: true,
    features: ["All models", "Priority routing", "Voice cloning"]
  }), /*#__PURE__*/React.createElement(PricingTier, {
    name: "Scale",
    price: "Custom",
    unit: "/ contract",
    cta: "Contact sales",
    features: ["Dedicated capacity", "SLA"]
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 20px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, "Invoices")), /*#__PURE__*/React.createElement(DataTable, {
    style: {
      border: "none",
      borderRadius: 0
    },
    columns: [{
      key: "d",
      label: "Period",
      primary: true
    }, {
      key: "a",
      label: "Amount",
      mono: true
    }, {
      key: "s",
      label: "Status",
      mono: true
    }],
    rows: [{
      d: "August 2026",
      a: "$412.80",
      s: "PAID"
    }, {
      d: "July 2026",
      a: "$388.10",
      s: "PAID"
    }, {
      d: "June 2026",
      a: "$201.55",
      s: "PAID"
    }]
  })));
}
Object.assign(window, {
  Overview,
  Keys,
  Playground,
  Billing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Home.jsx
try { (() => {
const M = window.VelorixAIDesignSystem_369328;
function HeroBand({
  onGo
}) {
  const {
    Band,
    Button,
    Icon
  } = M;
  return /*#__PURE__*/React.createElement(Band, {
    titleSize: "xl",
    title: "Understand the universe",
    lead: "Velorix builds frontier models for reasoning, voice, and code. Our latest model is available today to every developer.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(M.Button, {
      variant: "primary",
      onClick: onGo
    }, "Sign up now"), /*#__PURE__*/React.createElement(Button, {
      onClick: onGo
    }, "Read announcement ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    }))),
    style: {
      paddingTop: 96,
      paddingBottom: 96
    }
  });
}
function ProductsBand() {
  const {
    Band,
    Grid,
    FeatureCard
  } = M;
  return /*#__PURE__*/React.createElement(Band, {
    eyebrow: "Products",
    title: "Three surfaces, one model"
  }, /*#__PURE__*/React.createElement(Grid, {
    columns: 2
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    eyebrow: "Assistant",
    title: "Velorix 3",
    body: "Frontier reasoning with a 256K context window, available on web, iOS, and Android.",
    cta: "Try Velorix",
    media: /*#__PURE__*/React.createElement(Mock, {
      kind: "chat"
    })
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    eyebrow: "Voice",
    title: "Custom Voices",
    body: "Low-latency speech synthesis with voice cloning for teams building conversational products.",
    cta: "Custom Voices",
    media: /*#__PURE__*/React.createElement(Mock, {
      kind: "voice"
    })
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    eyebrow: "Platform",
    title: "Velorix API",
    body: "One endpoint for text, tools, and streaming. OpenAI-compatible request shape.",
    cta: "Read the docs",
    media: /*#__PURE__*/React.createElement(Mock, {
      kind: "code"
    })
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    eyebrow: "Research",
    title: "Open evals",
    body: "We publish the harness, the prompts, and the raw completions behind every number.",
    cta: "Read",
    media: /*#__PURE__*/React.createElement(Mock, {
      kind: "grid"
    })
  })));
}
function Mock({
  kind
}) {
  if (kind === "chat") return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "flex-end",
      background: "rgba(255,255,255,0.1)",
      border: "1px solid var(--border-translucent)",
      borderRadius: 12,
      padding: "8px 12px",
      fontSize: 13,
      color: "#fff"
    }
  }, "Explain Hawking radiation."), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "flex-start",
      background: "var(--color-canvas-mid)",
      borderRadius: 12,
      padding: "8px 12px",
      fontSize: 13,
      color: "#dadbdf",
      maxWidth: "80%"
    }
  }, "Near a black hole's horizon, vacuum fluctuations\u2026"));
  if (kind === "voice") return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 3,
      height: 80
    }
  }, Array.from({
    length: 40
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 3,
      borderRadius: 2,
      height: 8 + Math.abs(Math.sin(i / 3.1)) * 56,
      background: i % 7 === 0 ? "var(--color-accent-sunset)" : "var(--color-accent-breeze)",
      opacity: 0.85
    }
  })));
  if (kind === "code") return /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      width: "100%",
      padding: 20,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      lineHeight: "20px",
      color: "#dadbdf",
      overflow: "hidden"
    }
  }, `POST /v1/chat/completions
{
  "model": "velorix-3",
  "stream": true
}`);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6,14px)",
      gap: 6
    }
  }, Array.from({
    length: 24
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 14,
      height: 14,
      borderRadius: 3,
      background: ["var(--color-accent-dusk)", "var(--color-accent-twilight)", "var(--color-accent-breeze)", "var(--color-accent-sunset-soft)"][i % 4],
      opacity: 0.25 + i % 5 * 0.15
    }
  })));
}
function BenchBand() {
  const {
    Band,
    MetricStat,
    DataTable,
    Divider
  } = M;
  return /*#__PURE__*/React.createElement(Band, {
    eyebrow: "Benchmarks",
    title: "Measured, not claimed",
    lead: "Every figure below is reproducible with the published harness."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: "AIME 2025",
    value: "93.3%",
    note: "pass@1"
  }), /*#__PURE__*/React.createElement(MetricStat, {
    label: "GPQA Diamond",
    value: "87.5%",
    note: "no tools"
  }), /*#__PURE__*/React.createElement(MetricStat, {
    label: "SWE-bench",
    value: "72.1%",
    note: "verified"
  }), /*#__PURE__*/React.createElement(MetricStat, {
    label: "Context",
    value: "256K",
    note: "tokens"
  })), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: "8px 0"
    }
  }), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "model",
      label: "Model",
      primary: true
    }, {
      key: "reason",
      label: "Reasoning",
      mono: true
    }, {
      key: "code",
      label: "Code",
      mono: true
    }, {
      key: "price",
      label: "Per 1M in",
      mono: true
    }],
    rows: [{
      model: "Velorix 3",
      reason: "93.3",
      code: "72.1",
      price: "$3.00"
    }, {
      model: "Velorix 3 mini",
      reason: "88.1",
      code: "64.4",
      price: "$0.30"
    }, {
      model: "Velorix 2.5",
      reason: "79.0",
      code: "51.8",
      price: "$0.15"
    }]
  }));
}
Object.assign(window, {
  HeroBand,
  ProductsBand,
  BenchBand,
  Mock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pricing.jsx
try { (() => {
const MP = window.VelorixAIDesignSystem_369328;
function PricingBand({
  onSignup
}) {
  const {
    Band,
    Grid,
    PricingTier
  } = MP;
  return /*#__PURE__*/React.createElement(Band, {
    eyebrow: "Pricing",
    title: "Pay for tokens, nothing else",
    align: "left"
  }, /*#__PURE__*/React.createElement(Grid, {
    columns: 3
  }, /*#__PURE__*/React.createElement(PricingTier, {
    name: "Free",
    price: "$0",
    unit: "/ month",
    cta: "Start free",
    features: ["10K tokens per day", "Velorix 3 mini", "Community support"]
  }), /*#__PURE__*/React.createElement(PricingTier, {
    name: "Pro",
    price: "$30",
    unit: "/ month",
    cta: "Upgrade",
    featured: true,
    features: ["Velorix 3, unlimited chat", "Voice with cloning", "Priority routing"]
  }), /*#__PURE__*/React.createElement(PricingTier, {
    name: "Scale",
    price: "Custom",
    unit: "/ contract",
    cta: "Contact sales",
    features: ["Dedicated capacity", "Fine-tuning", "99.9% uptime SLA"]
  })));
}
function CtaBand({
  onSignup
}) {
  const {
    Band,
    Button,
    Input
  } = MP;
  return /*#__PURE__*/React.createElement(Band, {
    align: "center",
    hairline: false,
    title: "Start building today",
    titleSize: "lg",
    lead: "Create an account and get a key in under a minute.",
    style: {
      paddingTop: 96,
      paddingBottom: 96
    },
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-end",
        flexWrap: "wrap",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 280,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      name: "cta-email",
      label: "Work email",
      placeholder: "you@company.com"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onSignup,
      style: {
        padding: "12px 20px"
      }
    }, "Sign up now"))
  });
}
Object.assign(window, {
  PricingBand,
  CtaBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Site.jsx
try { (() => {
const MS = window.VelorixAIDesignSystem_369328;
function Site() {
  const {
    NavBar,
    Footer,
    Button,
    Modal,
    Input,
    Toast
  } = MS;
  const [page, setPage] = React.useState("home");
  const [signup, setSignup] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const nav = ["Velorix", "API", "Company", "Careers"];
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
    brand: "VELORIX",
    links: nav.map((l, i) => ({
      label: l,
      active: page === "home" && i === 0 || page === "api" && i === 1,
      onClick: () => setPage(i === 1 ? "api" : "home")
    })),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setPage("api")
    }, "Docs"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setSignup(true)
    }, "Sign up"))
  }), page === "home" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroBand, {
    onGo: () => setSignup(true)
  }), /*#__PURE__*/React.createElement(ProductsBand, null), /*#__PURE__*/React.createElement(BenchBand, null), /*#__PURE__*/React.createElement(PricingBand, null), /*#__PURE__*/React.createElement(CtaBand, {
    onSignup: () => setSignup(true)
  })) : /*#__PURE__*/React.createElement(ApiPage, {
    onBack: () => setPage("home")
  }), /*#__PURE__*/React.createElement(Footer, {
    brand: "VELORIX",
    note: "Building AI to understand the universe.",
    columns: [{
      title: "Products",
      links: ["Velorix 3", "Custom Voices", "API"]
    }, {
      title: "Company",
      links: ["About", "Careers", "News", "Legal"]
    }, {
      title: "Resources",
      links: ["Docs", "Status", "Changelog"]
    }]
  }), /*#__PURE__*/React.createElement(Modal, {
    open: signup,
    title: sent ? "Check your inbox" : "Create your account",
    onClose: () => {
      setSignup(false);
      setSent(false);
    },
    footer: sent ? /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => {
        setSignup(false);
        setSent(false);
      }
    }, "Done") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setSignup(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setSent(true)
    }, "Sign up now"))
  }, sent ? "We sent a sign-in link to you@company.com." : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    name: "su-email",
    label: "Work email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(MS.Checkbox, {
    label: "Send me product updates",
    checked: true,
    onChange: () => {}
  }))));
}
function ApiPage({
  onBack
}) {
  const {
    Band,
    Grid,
    Card,
    Eyebrow,
    Button,
    Badge,
    DataTable,
    Select
  } = MS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    eyebrow: "Platform",
    title: "Velorix API",
    titleSize: "lg",
    lead: "One endpoint for text, tools, and streaming. Drop-in compatible with the OpenAI request shape.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Get an API key"), /*#__PURE__*/React.createElement(Button, {
      onClick: onBack
    }, "Back to home"))
  }), /*#__PURE__*/React.createElement(Band, {
    eyebrow: "Quickstart",
    title: "Two minutes to first token"
  }, /*#__PURE__*/React.createElement(Grid, {
    columns: 2
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "soft",
    padding: "0",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 16px",
      borderBottom: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, "curl"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "mute"
  }, "v1"))), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      lineHeight: "20px",
      color: "#dadbdf",
      overflowX: "auto"
    }
  }, `curl https://api.velorix.ai/v1/chat/completions \\
  -H "Authorization: Bearer $VELORIX_KEY" \\
  -d '{
    "model": "velorix-3",
    "messages": [{"role":"user","content":"hi"}],
    "stream": true
  }'`)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    color: "var(--color-body-mid)"
  }, "Models"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Select, {
    name: "model",
    options: ["velorix-3", "velorix-3-mini", "velorix-voice"]
  }))), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "n",
      label: "Endpoint",
      primary: true
    }, {
      key: "m",
      label: "Method",
      mono: true
    }],
    rows: [{
      n: "/v1/chat/completions",
      m: "POST"
    }, {
      n: "/v1/audio/speech",
      m: "POST"
    }, {
      n: "/v1/models",
      m: "GET"
    }]
  })))));
}
Object.assign(window, {
  Site,
  ApiPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.MetricStat = __ds_scope.MetricStat;

__ds_ns.PricingTier = __ds_scope.PricingTier;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Band = __ds_scope.Band;

__ds_ns.Grid = __ds_scope.Grid;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SidebarRow = __ds_scope.SidebarRow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Display = __ds_scope.Display;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

})();
