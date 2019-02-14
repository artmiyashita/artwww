<?php

/* @CoreHome/_warningInvalidHost.twig */
class __TwigTemplate_fd5932251b50635d0231a52c87d69d6097f0e946201aeadc3a11c9e63d1df37b extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 2
        if (((array_key_exists("isValidHost", $context) && array_key_exists("invalidHostMessage", $context)) && ((isset($context["isValidHost"]) ? $context["isValidHost"] : $this->getContext($context, "isValidHost")) == false))) {
            // line 3
            echo "    ";
            ob_start();
            // line 4
            echo "        <a style=\"float:right;\" href=\"http://piwik.org/faq/troubleshooting/#faq_171\" target=\"_blank\"><img src=\"plugins/Zeitgeist/images/help.png\"/></a>
        <strong>";
            // line 5
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Warning")), "html", null, true);
            echo ":&nbsp;</strong>";
            echo (isset($context["invalidHostMessage"]) ? $context["invalidHostMessage"] : $this->getContext($context, "invalidHostMessage"));
            echo "

        <br>
        <br>

        <small>";
            // line 10
            echo (isset($context["invalidHostMessageHowToFix"]) ? $context["invalidHostMessageHowToFix"] : $this->getContext($context, "invalidHostMessageHowToFix"));
            echo "
        <br/><br/><a style=\"float:right;\" href=\"http://piwik.org/faq/troubleshooting/#faq_171\" target=\"_blank\">";
            // line 11
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_Help")), "html", null, true);
            echo "
        <img style=\"vertical-align: bottom;\" src=\"plugins/Zeitgeist/images/help.png\"/></a><br/>
        </small>
    ";
            $context["invalidHostText"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
            // line 15
            echo "
    <div style=\"clear:both;width:800px;\">
        ";
            // line 17
            echo call_user_func_array($this->env->getFilter('notification')->getCallable(), array((isset($context["invalidHostText"]) ? $context["invalidHostText"] : $this->getContext($context, "invalidHostText")), array("noclear" => true, "raw" => true, "context" => "warning")));
            echo "
    </div>

";
        }
        // line 21
        echo "
";
    }

    public function getTemplateName()
    {
        return "@CoreHome/_warningInvalidHost.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  52 => 17,  48 => 15,  41 => 11,  27 => 5,  24 => 4,  21 => 3,  365 => 166,  359 => 163,  356 => 162,  350 => 159,  347 => 158,  345 => 157,  338 => 155,  333 => 153,  326 => 151,  315 => 143,  304 => 135,  297 => 131,  290 => 127,  286 => 126,  275 => 118,  271 => 117,  265 => 116,  257 => 111,  253 => 110,  247 => 107,  240 => 103,  236 => 102,  233 => 101,  227 => 99,  225 => 98,  222 => 97,  214 => 94,  211 => 93,  209 => 92,  206 => 91,  202 => 89,  191 => 87,  187 => 86,  184 => 85,  182 => 84,  179 => 83,  176 => 82,  173 => 81,  170 => 80,  164 => 75,  155 => 71,  151 => 69,  149 => 68,  146 => 67,  143 => 66,  137 => 64,  134 => 63,  132 => 62,  129 => 61,  125 => 60,  118 => 59,  109 => 56,  106 => 55,  100 => 53,  98 => 52,  91 => 47,  89 => 46,  84 => 43,  80 => 41,  78 => 40,  69 => 33,  59 => 21,  57 => 24,  45 => 15,  42 => 14,  37 => 10,  28 => 8,  19 => 2,);
    }
}
