<?php

/* @CoreHome/_notifications.twig */
class __TwigTemplate_31e6f5cb987e307fe759f08036dd43f3c9e8b313a307bfd9880d61f4833058ad extends Twig_Template
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
        echo "<div id=\"notificationContainer\">
    ";
        // line 2
        if (twig_length_filter($this->env, (isset($context["notifications"]) ? $context["notifications"] : $this->getContext($context, "notifications")))) {
            // line 3
            echo "        ";
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["notifications"]) ? $context["notifications"] : $this->getContext($context, "notifications")));
            foreach ($context['_seq'] as $context["notificationId"] => $context["n"]) {
                // line 4
                echo "
            ";
                // line 5
                echo call_user_func_array($this->env->getFilter('notification')->getCallable(), array($this->getAttribute((isset($context["n"]) ? $context["n"] : $this->getContext($context, "n")), "message"), array("id" => (isset($context["notificationId"]) ? $context["notificationId"] : $this->getContext($context, "notificationId")), "type" => $this->getAttribute((isset($context["n"]) ? $context["n"] : $this->getContext($context, "n")), "type"), "title" => $this->getAttribute((isset($context["n"]) ? $context["n"] : $this->getContext($context, "n")), "title"), "noclear" => $this->getAttribute((isset($context["n"]) ? $context["n"] : $this->getContext($context, "n")), "hasNoClear"), "context" => $this->getAttribute((isset($context["n"]) ? $context["n"] : $this->getContext($context, "n")), "context"), "raw" => $this->getAttribute((isset($context["n"]) ? $context["n"] : $this->getContext($context, "n")), "raw")), false));
                echo "

        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['notificationId'], $context['n'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 8
            echo "    ";
        }
        // line 9
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "@CoreHome/_notifications.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  101 => 17,  58 => 16,  48 => 12,  165 => 64,  153 => 62,  151 => 61,  136 => 52,  130 => 50,  128 => 49,  106 => 43,  102 => 42,  98 => 40,  71 => 32,  44 => 9,  21 => 2,  35 => 6,  26 => 4,  90 => 37,  82 => 22,  69 => 8,  52 => 5,  39 => 8,  63 => 6,  59 => 8,  49 => 27,  33 => 6,  28 => 4,  24 => 3,  132 => 36,  113 => 44,  108 => 28,  104 => 27,  96 => 25,  92 => 16,  88 => 23,  79 => 33,  77 => 11,  70 => 15,  62 => 29,  46 => 9,  31 => 6,  27 => 1,  23 => 3,  19 => 1,  134 => 43,  131 => 42,  127 => 34,  124 => 47,  121 => 32,  114 => 20,  112 => 19,  107 => 16,  105 => 15,  100 => 26,  87 => 9,  84 => 22,  81 => 7,  74 => 20,  72 => 19,  68 => 44,  66 => 13,  60 => 12,  55 => 36,  53 => 33,  50 => 9,  41 => 8,  38 => 2,  36 => 7,  32 => 5,  30 => 19,  22 => 2,  56 => 13,  54 => 15,  51 => 11,  47 => 10,  45 => 9,  42 => 9,  40 => 5,  37 => 4,  34 => 3,  29 => 4,);
    }
}
