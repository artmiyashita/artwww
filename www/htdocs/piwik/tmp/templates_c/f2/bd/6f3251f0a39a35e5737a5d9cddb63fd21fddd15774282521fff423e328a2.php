<?php

/* @CoreHome/_logo.twig */
class __TwigTemplate_f2bd6f3251f0a39a35e5737a5d9cddb63fd21fddd15774282521fff423e328a2 extends Twig_Template
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
        // line 1
        echo "<span id=\"logo\">
    <a href=\"index.php\" title=\"";
        // line 2
        if ((isset($context["isCustomLogo"]) ? $context["isCustomLogo"] : $this->getContext($context, "isCustomLogo"))) {
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_PoweredBy")), "html", null, true);
            echo " ";
        }
        echo "Piwik # ";
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_OpenSourceWebAnalytics")), "html", null, true);
        echo "\">
    ";
        // line 3
        if ((isset($context["hasSVGLogo"]) ? $context["hasSVGLogo"] : $this->getContext($context, "hasSVGLogo"))) {
            // line 4
            echo "        <img src='";
            echo twig_escape_filter($this->env, (isset($context["logoSVG"]) ? $context["logoSVG"] : $this->getContext($context, "logoSVG")), "html", null, true);
            echo "' alt=\"";
            if ((isset($context["isCustomLogo"]) ? $context["isCustomLogo"] : $this->getContext($context, "isCustomLogo"))) {
                echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_PoweredBy")), "html", null, true);
                echo " ";
            }
            echo "Piwik\" class=\"ie-hide ";
            if ((!(isset($context["isCustomLogo"]) ? $context["isCustomLogo"] : $this->getContext($context, "isCustomLogo")))) {
                echo "default-piwik-logo";
            }
            echo "\" />
        <!--[if lt IE 9]>
    ";
        }
        // line 7
        echo "        <img src='";
        echo twig_escape_filter($this->env, (isset($context["logoHeader"]) ? $context["logoHeader"] : $this->getContext($context, "logoHeader")), "html", null, true);
        echo "' alt=\"";
        if ((isset($context["isCustomLogo"]) ? $context["isCustomLogo"] : $this->getContext($context, "isCustomLogo"))) {
            echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_PoweredBy")), "html", null, true);
            echo " ";
        }
        echo "Piwik\" />
    ";
        // line 8
        if ((isset($context["hasSVGLogo"]) ? $context["hasSVGLogo"] : $this->getContext($context, "hasSVGLogo"))) {
            echo "<![endif]-->";
        }
        // line 9
        echo "</a>
</span>
";
    }

    public function getTemplateName()
    {
        return "@CoreHome/_logo.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  63 => 9,  59 => 8,  49 => 7,  33 => 4,  28 => 5,  24 => 3,  132 => 36,  113 => 30,  108 => 28,  104 => 27,  96 => 25,  92 => 24,  88 => 23,  79 => 21,  77 => 20,  70 => 15,  62 => 13,  46 => 9,  31 => 3,  27 => 4,  23 => 3,  19 => 1,  134 => 43,  131 => 42,  127 => 34,  124 => 33,  121 => 32,  114 => 20,  112 => 19,  107 => 16,  105 => 15,  100 => 26,  87 => 9,  84 => 22,  81 => 7,  74 => 47,  72 => 19,  68 => 44,  66 => 42,  60 => 39,  55 => 36,  53 => 33,  50 => 32,  41 => 28,  38 => 7,  36 => 26,  32 => 24,  30 => 6,  22 => 2,  56 => 12,  54 => 11,  51 => 10,  47 => 31,  45 => 30,  42 => 6,  40 => 5,  37 => 4,  34 => 3,  29 => 2,);
    }
}
